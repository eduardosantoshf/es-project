#!/usr/bin/python

# @Author: Rafael Direito
# @Date:   2022-10-06 11:30:52 (WEST)
# @Email:  rdireito@av.it.pt
# @Copyright: Insituto de Telecomunicações - Aveiro, Aveiro, Portugal
# @Last Modified by:   Rafael Direito
# @Last Modified time: 2022-10-07 11:34:30

import os
from human_detection import Human_Detection_Module
from dotenv import load_dotenv
load_dotenv()

# AMQP Variables
RABBIT_MQ_USERNAME = os.environ['RABBIT_MQ_USERNAME']
RABBIT_MQ_PASSWORD = os.environ['RABBIT_MQ_PASSWORD']
RABBIT_MQ_URL = os.environ['RABBIT_MQ_URL']
REDIS_URL = os.environ['REDIS_URL']
INTRUSION_MANAGEMENT_API_URL = os.environ['INTRUSION_MANAGEMENT_API_URL']

RABBIT_MQ_EXCHANGE_NAME = "human-detection-exchange"
RABBIT_MQ_QUEUE_NAME = "human-detection-queue"

# OUTPUT
OUTPUT_DIR = "intruders"

print("Running...")

human_detection_worker = Human_Detection_Module(OUTPUT_DIR)

human_detection_worker.start_processing(
    broker_url=RABBIT_MQ_URL,
    broker_username=RABBIT_MQ_USERNAME,
    broker_password=RABBIT_MQ_PASSWORD,
    exchange_name=RABBIT_MQ_EXCHANGE_NAME,
    queue_name=RABBIT_MQ_QUEUE_NAME,
    redis_url=REDIS_URL,
    intrusion_management_api_url=INTRUSION_MANAGEMENT_API_URL
    )

print("End of video processing")