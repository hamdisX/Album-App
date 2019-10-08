pipeline {
  agent {
    docker {
      image 'node'
      args '-p 8088:8080'
    }

  }
  stages {
    stage('Sonarqube') {
      environment {
        scannerHome = 'tool \'sonarQubeScanner\''
      }
      steps {
        sh '''withSonarQubeEnv(\'sonarqube\') {
            sh "${scannerHome}/bin/sonar-scanner"
        }'''
          sleep 30
        }
      }
      stage('Install dependencies') {
        steps {
          sh 'npm install'
        }
      }
      stage('start') {
        steps {
          sh 'npm start'
        }
      }
    }
  }