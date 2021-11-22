from __future__ import print_function
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import classification_report
from sklearn import metrics
from sklearn import tree
import pickle
import requests
import warnings
warnings.filterwarnings('ignore')
# from __future__ import print_function # In python 2.7
import sys
from json import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

crop_recommendation_model_path = './XGBoost.pkl'
crop_recommendation_model = pickle.load(
    open(crop_recommendation_model_path, 'rb'))

@app.route("/crop", methods=['POST'])
def members():

    N = int(request.json['N'])
    P = int(request.json['P'])
    K = int(request.json['K'])
    ph = float(request.json['Ph'])
    temprature = float(request.json['temprature'])
    humidity = float(request.json['humidity'])
    rainfall = float(request.json['rainfall'])


    data = np.array([[N, P, K, temprature, humidity, ph, rainfall]])

    # data = np.array([[104,18, 30, 23.603016, 60.3, 6.7, 140.91]])
    # data = np.array([[83, 45, 60, 28, 70.3, 7.0, 150.9]])
    my_prediction = crop_recommendation_model.predict(data)
    final_prediction = my_prediction[0]

    return jsonify({"crop": final_prediction})

if __name__ == "__main__":
    app.run(debug=True)