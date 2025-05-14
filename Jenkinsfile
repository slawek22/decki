pipeline {
  agent any

  environment {
    FRONTEND_REPO = 'https://github.com/slawek22/decki.git'
    BACKEND_REPO  = 'https://github.com/slawek22/decure-backend.git'
  }

  stages {
    stage('Pobierz frontend') {
      steps {
        dir('frontend') {
          git "${FRONTEND_REPO}"
        }
      }
    }

    stage('Pobierz backend') {
      steps {
        dir('backend') {
          git "${BACKEND_REPO}"
        }
      }
    }

    stage('Zbuduj frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Zainstaluj backend') {
      steps {
        dir('backend') {
          sh 'npm install'
        }
      }
    }

    stage('Deploy frontend') {
      steps {
        sh 'sudo rm -rf /home/ubuntu/frontend/dist/*'
        sh 'sudo cp -r frontend/dist/* /home/ubuntu/frontend/dist/'
        sh 'sudo chown -R www-data:www-data /home/ubuntu/frontend/dist'
      }
    }

    stage('Deploy backend') {
      steps {
        sh 'sudo rm -rf /home/ubuntu/backend'
        sh 'sudo cp -r backend /home/ubuntu/'
      }
    }

    stage('Restart serwisów') {
      steps {
        sh 'sudo systemctl restart decure-backend || echo "backend service not configured – skipping"'
        sh 'sudo systemctl reload nginx'
      }
    }
  }
}
