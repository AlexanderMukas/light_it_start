from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

import json

def home(request):
	return render(request, 'app/index.html')

def ajax_encode(request):
	#import json
	new_string = ''
	#left_side = None
	#right_side = None
	#rotate = None
	#if request.method == 'GET':
	#results = { 'success' : False }
	data = {}
	dictionary = {chr(x): x-97 for x in range(97, 123)}
	left_side = str(request.GET['l_area'])
	rotate = int(request.GET['rv'])
	for i in left_side:
		i_low = i.lower()
		if (i not in dictionary):# and (i_low not in dictionary): # если такого символа нет в словаре, те. это не буква, то оставляем как есть 
			new_string += i
			continue
		char = dictionary[i] + rotate
		# получили сдвиг по символу
		# букв в анг алфавите 26, счет с 0
		if char > 25:
			char = char - 26
		#new_string = new_string + dictionary[]
		new_string += get_key(dictionary, char)

	data['result'] = new_string   #left_side + ' 1'
	return HttpResponse(json.dumps(data), content_type="application/json")

def get_key(dic, val):
    '''получение ключа по значению словаря'''
    for i in dic.items():
        if val in i:
            return i[0]

def ajax_decode(request):

	new_string = ''

	#if request.method == 'GET':
	#results = { 'success' : False }
	data = {}
	dictionary = {chr(x): x-97 for x in range(97, 123)}
	# получаем данные
	right_side = str(request.GET['r_area'])
	rotate = int(request.GET['rv'])

	for i in right_side:
		if i not in dictionary: # если такого символа нет в словаре, те. это не буква, то оставляем как есть 
			new_string += i
			continue
		char = dictionary[i] - rotate
		# получили сдвиг по символу
		# букв в анг алфавите 26, счет с 0
		if char < 0:
			char = 26 + char

		new_string += get_key(dictionary, char)

	data['result'] = new_string   #left_side + ' 1'
	data['ROTN'] = rotate
	return HttpResponse(json.dumps(data), content_type="application/json")