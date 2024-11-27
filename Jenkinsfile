pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = "my-docker-registry"
        DOCKER_IMAGE = "victor-beguito-ciclo2-gateway"
        DOCKER_TAG = "latest"
        GIT_REPO_URL = "https://github.com/Bvictor94/victor-beguito-ciclo2-gateway.git"
    }

    stages {
        stage('Clone Code') {
            steps {
                script {
                    git url: "${GIT_REPO_URL}", branch: 'main'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run test'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh "docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh "docker-compose up -d"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executada com sucesso!'
        }
        failure {
            echo 'A pipeline falhou.'
        }
    }
}
