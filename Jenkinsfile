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
          git branch: 'main', url: "${FRONTEND_REPO}"
        }
      }
    }

    stage('Pobierz backend') {
      steps {
        dir('backend') {
          git branch: 'main', url: "${BACKEND_REPO}"
        }
      }
    }

    stage('Zbuduj frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'chmod +x ./node_modules/.bin/vite'
          sh './node_modules/.bin/vite build'
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

stage('Ustaw .env backend') {
  steps {
    sh 'echo "MONGO_URI=mongodb+srv://decsla:Start1234!@cluster0.sfov6dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" > /home/ubuntu/backend/.env'
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
        sh '''
          # Zabij proces na porcie 3001, jeśli istnieje
          PID=$(sudo lsof -t -i:3001 || true)
          if [ -n "$PID" ]; then
            echo "Zabijam proces $PID na porcie 3001"
            sudo kill -9 $PID
          fi

          # Restart backendu jako usługi
          sudo systemctl restart decure-backend || echo "Backend service not configured – skipping"

          # Restart nginx
          sudo systemctl reload nginx
        '''
      }
    }
  }
}
