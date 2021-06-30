import os
from time import sleep
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

link = "https://www.linkedin.com/mynetwork/"

options = webdriver.ChromeOptions()
options.add_argument("user-data-dir={}\driver_data".format(os.getcwd()))
driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)

driver.get(link)

sleep(5)

el = driver.find_elements_by_xpath(
    "//*[@class='invitation-card__action-btn artdeco-button artdeco-button--2 artdeco-button--secondary ember-view']")
sleep(3)

print(el)

for x in el:
    print(x)
    x.click()
    
# el[0].click

sleep(8)
driver.close()
