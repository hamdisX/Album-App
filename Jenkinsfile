pipeline {
  agent any    
  tools {nodejs "node.js_12"}
    
  stages {
    
      stage('run sonar and postgress') {
      steps {
        sh 'docker-compose -f sonar+postgres/docker-compose.yml up -d'
        sleep(time: 100, unit: 'SECONDS')
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
