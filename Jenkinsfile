pipeline {
  agent any    
  tools {nodejs "node.js_12"}
    
  stages {
    
      stage('run server sonar and db postgress') {
      options {
              timeout(time: 2, unit: 'MINUTES') 
            }
      steps {
        sh 'docker-compose -f sonar+postgres/docker-compose.yml up -t 1001-d'
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
