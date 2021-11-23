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
    state = request.json['state']
    district = request.json['district']

    temprature = 20
    humidity = 30
    rainfall = 100

    x = requests.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+ district + ' ' + state + '.json?access_token=pk.eyJ1Ijoic2FpZ29ydGk4MSIsImEiOiJja3ZqY2M5cmYydXd2MnZwZ2VoZzl1ejNkIn0.CupGYvpb_LNtDgp7b-rZJg')

    coordinates =  x.json()['features'][0]['center']

    y = requests.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8d51fbf3b5ad7f3cc65ba0ea07220782')

    humidity = y.json()['main']['humidity']
    temprature = y.json()['main']['temp']

    df=pd.read_csv("./data2.csv")
    # q = df.query('STATE_UT_NAME=="ANDAMAN And NICOBAR ISLANDS" and DISTRICT == "NICOBAR"', inplace = False)
    q = df.query('STATE_UT_NAME == "{}" and DISTRICT == "{}"'.format(state, district), inplace = False)

    total=0
    for i in range(len(q)):
        total+=int(q[i:i+1].value)
    avg_rainfall = total/len(q)

    data = np.array([[N, P, K, temprature, humidity, ph, avg_rainfall]])

    # data = np.array([[104,18, 30, 23.603016, 60.3, 6.7, 140.91]])
    # data = np.array([[83, 45, 60, 28, 70.3, 7.0, 150.9]])
    my_prediction = crop_recommendation_model.predict(data)
    final_prediction = my_prediction[0]

    return jsonify({"crop": final_prediction, "data": [N, P, K, temprature, humidity, ph, avg_rainfall]})

if __name__ == "__main__":
    app.run(debug=True)