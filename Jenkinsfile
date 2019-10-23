pipeline {
  agent any    
  tools {nodejs "node.js_12"}
    
  stages {
    
      stage('run server sonar and db postgress') {
      steps {
        sh 'cd sonar+postgres'
        sh 'docker-compose up'
      }
    }

    stage('Sonarqube') {
    environment {
        scannerHome = tool 'sonarQubeScanner'
    }
    steps {
        withSonarQubeEnv('sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
         //timeout(time: 10, unit: 'MINUTES') {
           //  waitForQualityGate abortPipeline: true
         //}
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
