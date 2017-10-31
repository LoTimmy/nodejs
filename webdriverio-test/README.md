mkdir webdriverio-test && cd webdriverio-test
curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar

curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-linux64.tar.gz | tar xz
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-macos.tar.gz | tar xz

java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.0.1.jar

yarn add webdriverio

curl -O http://chromedriver.storage.googleapis.com/2.32/chromedriver_mac64.zip
curl -O http://chromedriver.storage.googleapis.com/2.32/chromedriver_win32.zip
curl -O http://chromedriver.storage.googleapis.com/2.32/chromedriver_linux64.zip
curl -O http://chromedriver.storage.googleapis.com/2.32/chromedriver_linux32.zip

unzip chromedriver_mac64.zip
./chromedriver

- http://webdriver.io/v3.4/guide/getstarted/install.html
- http://webdriver.io/guide/getstarted/configuration.html
