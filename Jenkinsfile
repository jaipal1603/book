pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                     sh "docker build -t jaipal1-cmd/book-app:main ."
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                    sh 'docker container rm -f book-app'
                    sh 'docker run -d --name book-app -p 3000:3000 jaipal1-cmd/book-app:main'
                }
            }
        }
    }
}
