from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from time import sleep
def spider(url,headers):
    driver = webdriver.Chrome()
    driver.get(url)
    html=driver.page_source 
    soup = BeautifulSoup(html, 'html.parser')
    reds = soup.select('.qiu-item-wqgg-zjhm-red')
    blues = soup.select('.qiu-item-wqgg-zjhm-blue')
        # 获取所有标签内的数字
    
    numbers_red_all = [item.text for item in reds]
    numbers_blue_all = [item.text for item in blues]
    sleep(1)

    for i in range(30-1):
        #第二页以后，第几页for循环就该几次-1
        next = driver.find_element(By.CSS_SELECTOR,'a.layui-laypage-next')
        # 鼠标单击
        next.click()
        sleep(1)
        html=driver.page_source 
        soup = BeautifulSoup(html, 'html.parser')
        reds = soup.select('.qiu-item-wqgg-zjhm-red')
        blues = soup.select('.qiu-item-wqgg-zjhm-blue')
            # 获取所有标签内的数字
        numbers_red_all += [item.text for item in reds]
        numbers_blue_all += [item.text for item in blues]
    
    red_save = 'let redNum=['+','.join(numbers_red_all)+'];'
    blue_save = 'let blueNum=['+','.join(numbers_blue_all)+'];'
    with open(file="./PracticeCase/彩票可视化/双色球/js/data2.js",mode="w",encoding="utf-8") as f:
        data1=f.write(red_save)
        data2=f.write(blue_save)
        print(data1,data2)

    #实际的排列，可以用于储存
    # numbers_red_list = [numbers_red_all[i:i+6] for i in range(0, len(numbers_red_all), 6)]
    # drawlings = []
    # for i in range(len(numbers_blue_all)):
    #     drawlings.append(
    #         {"red":numbers_red_list[i],
    #         "blue":numbers_blue_all[i]
    #         })
    return numbers_red_all,numbers_blue_all

def counts(reds,blues):
    red_counts = {}
    blue_counts = {}
    # 统计每个数字出现的频次
    for i in range(33):
        red_counts[str(i+1)] = 0
    for i in range(16):
        blue_counts[str(i+1)] = 0
    for red in reds:
        red_counts[red] += 1
    for blue in blues:
        blue_counts[blue] += 1

    red_dic = sorted(red_counts.items(), key=lambda item:item[1])
    blue_dic = sorted(blue_counts.items(), key=lambda item:item[1])
    return red_dic,blue_dic

import random
def randomChoice(red_dic,blue_dic):
    redList = []
    blueList = []
    for item in red_dic:
        redList.append(item[0])
    for item in blue_dic:
        blueList.append(item[0])
    #选5组，分别6红1蓝
    totalStr = ""
    for i in range(5):
        #最低频的10个内选6个
        for item in random.sample(redList[:10], 6):
            totalStr += str(item) + " "
        totalStr += "- "
        #最低频的5个选1个
        for item in random.sample(blueList[:5], 1):
            totalStr += str(item) + "\n"
    return totalStr

def main():
    url = 'http://www.cwl.gov.cn/ygkj/wqkjgg/ssq/'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    reds,blues = spider(url,headers)
    red_dic,blue_dic = counts(reds,blues)
    # totalStr = randomChoice(red_dic,blue_dic)
    # print(totalStr)
    # totalStr = randomChoice(red_dic,blue_dic)
    # print(totalStr)
    # totalStr = randomChoice(red_dic,blue_dic)
    # print(totalStr)
    # totalStr = randomChoice(red_dic,blue_dic)
    # print(totalStr)
    # totalStr = randomChoice(red_dic,blue_dic)
    # print(totalStr)



    
if __name__ == '__main__':
    main()


