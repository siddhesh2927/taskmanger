import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Box,
    Typography,
    Paper,
    Grid,
    IconButton,
    Chip,
    Divider,
    Alert
} from '@mui/material';
import {
    Add as AddIcon,
    Delete as DeleteIcon,
    Task as TaskIcon,
    CalendarToday as CalendarIcon,
    Label as LabelIcon,
    Description as DescriptionIcon
} from '@mui/icons-material';
import { AddTasktoBackend } from '../../redux/action';
import { Sidebar } from '../Sidebar/sidebar';
import './AddTask.css';

export const AddTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = Cookies.get("Token");

    // Refs for form inputs
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);
    const subtaskRef = useRef(null);

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tag: '',
        date: '',
        subtasks: []
    });

    const [subtaskInput, setSubtaskInput] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Redirect if not authenticated
    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    // Handle form field changes
    const handleInputChange = (field) => (event) => {
        setFormData(prev => ({
            ...prev,
            [field]: event.target.value
        }));
        
        // Clear error for this field if it exists
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    // Add subtask
    const handleAddSubtask = () => {
        if (subtaskInput.trim()) {
            setFormData(prev => ({
                ...prev,
                subtasks: [...prev.subtasks, { title: subtaskInput.trim() }]
            }));
            setSubtaskInput('');
            subtaskRef.current?.focus();
        }
    };

    // Remove subtask
    const handleRemoveSubtask = (index) => {
        setFormData(prev => ({
            ...prev,
            subtasks: prev.subtasks.filter((_, i) => i !== index)
        }));
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.title.trim()) {
            newErrors.title = 'Task title is required';
        }
        
        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }
        
        if (!formData.tag) {
            newErrors.tag = 'Please select a tag';
        }
        
        if (!formData.date) {
            newErrors.date = 'Please select a date';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            await dispatch(AddTasktoBackend(token, formData));
            
            // Reset form
            setFormData({
                title: '',
                description: '',
                tag: '',
                date: '',
                subtasks: []
            });
            setSubtaskInput('');
            setErrors({});
            
            // Clear input fields
            if (titleRef.current) titleRef.current.value = '';
            if (descriptionRef.current) descriptionRef.current.value = '';
            if (dateRef.current) dateRef.current.value = '';
            
        } catch (error) {
            console.error('Error adding task:', error);
            setErrors({ submit: 'Failed to add task. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle Enter key in subtask input
    const handleSubtaskKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSubtask();
        }
    };

    return (
        <div className="add-task-page">
            <Sidebar />
            
            <div className="add-task-content">
                <Paper className="add-task-container" elevation={0}>
                    <Box className="form-header">
                        <TaskIcon className="header-icon" />
                        <Typography variant="h4" component="h1" className="header-title">
                            Create New Task
                        </Typography>
                        <Typography variant="body1" className="header-subtitle">
                            Add a new task to your workspace
                        </Typography>
                    </Box>

                    <form onSubmit={handleSubmit} className="task-form">
                        <Grid container spacing={3}>
                            {/* Task Details Section */}
                            <Grid item xs={12}>
                                <Box className="form-section">
                                    <Typography variant="h6" className="section-title">
                                        Task Details
                                    </Typography>
                                    
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                inputRef={titleRef}
                                                fullWidth
                                                label="Task Title"
                                                variant="outlined"
                                                value={formData.title}
                                                onChange={handleInputChange('title')}
                                                error={!!errors.title}
                                                helperText={errors.title}
                                                className="form-input"
                                                placeholder="Enter task title..."
                                            />
                                        </Grid>
                                        
                                        <Grid item xs={12}>
                                            <TextField
                                                inputRef={descriptionRef}
                                                fullWidth
                                                label="Description"
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                                value={formData.description}
                                                onChange={handleInputChange('description')}
                                                error={!!errors.description}
                                                helperText={errors.description}
                                                className="form-input"
                                                placeholder="Describe your task..."
                                            />
                                        </Grid>
                                        
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={!!errors.tag}>
                                                <InputLabel>Category</InputLabel>
                                                <Select
                                                    value={formData.tag}
                                                    onChange={handleInputChange('tag')}
                                                    label="Category"
                                                    className="form-select"
                                                >
                                                    <MenuItem value="personal">Personal</MenuItem>
                                                    <MenuItem value="official">Official</MenuItem>
                                                    <MenuItem value="others">Others</MenuItem>
                                                </Select>
                                                {errors.tag && (
                                                    <Typography variant="caption" color="error">
                                                        {errors.tag}
                                                    </Typography>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                inputRef={dateRef}
                                                fullWidth
                                                type="date"
                                                label="Due Date"
                                                variant="outlined"
                                                value={formData.date}
                                                onChange={handleInputChange('date')}
                                                error={!!errors.date}
                                                helperText={errors.date}
                                                className="form-input"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Subtasks Section */}
                            <Grid item xs={12}>
                                <Box className="form-section">
                                    <Typography variant="h6" className="section-title">
                                        Subtasks
                                    </Typography>
                                    
                                    <Box className="subtask-input-container">
                                        <TextField
                                            inputRef={subtaskRef}
                                            fullWidth
                                            label="Add Subtask"
                                            variant="outlined"
                                            value={subtaskInput}
                                            onChange={(e) => setSubtaskInput(e.target.value)}
                                            onKeyPress={handleSubtaskKeyPress}
                                            placeholder="Enter subtask title..."
                                            className="subtask-input"
                                        />
                                        <IconButton
                                            onClick={handleAddSubtask}
                                            disabled={!subtaskInput.trim()}
                                            className="add-subtask-btn"
                                            color="primary"
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                    
                                    {formData.subtasks.length > 0 && (
                                        <Box className="subtasks-list">
                                            <Typography variant="subtitle2" className="subtasks-label">
                                                Added Subtasks ({formData.subtasks.length})
                                            </Typography>
                                            {formData.subtasks.map((subtask, index) => (
                                                <Chip
                                                    key={index}
                                                    label={subtask.title}
                                                    onDelete={() => handleRemoveSubtask(index)}
                                                    deleteIcon={<DeleteIcon />}
                                                    className="subtask-chip"
                                                    color="primary"
                                                    variant="outlined"
                                                />
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            </Grid>

                            {/* Error Display */}
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <Alert severity="error" className="error-alert">
                                        {errors.submit}
                                    </Alert>
                                </Grid>
                            )}

                            {/* Submit Button */}
                            <Grid item xs={12}>
                                <Box className="form-actions">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        disabled={isSubmitting}
                                        className="submit-btn"
                                        startIcon={<TaskIcon />}
                                    >
                                        {isSubmitting ? 'Creating Task...' : 'Create Task'}
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </div>
        </div>
    );
};

