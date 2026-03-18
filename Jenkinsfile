pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building ${env.BRANCH_NAME}"
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying to Production 🚀"
            }
        }

        stage('Deploy to Staging') {
            when {
                branch 'dev'
            }
            steps {
                echo "Deploying to Staging 🧪"
            }
        }
    }
}
