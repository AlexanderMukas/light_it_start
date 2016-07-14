from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

import json
# Словари, которые нужны для кодирования/раскодирования
dict_lowc = {chr(x): x-97 for x in range(97, 123)}
# result:
		# {'d': 3, 'o': 14, 'i': 8, 't': 19, 'q': 16, 'h': 7, 'g': 6,
		# 'b': 1, 'a': 0, 'y': 24, 'u': 20, 'e': 4, 'j': 9, 'm': 12, 'z': 25,
		# 'x': 23, 'p': 15, 's': 18, 'v': 21, 'r': 17, 'w': 22, 'c': 2, 'f': 5, 'n': 13, 'l': 11, 'k': 10} 
dict_uppc = { (chr(x)).upper() : x-97 for x in range(97, 123)}
# result: dict_lowc, but "key" in UPPERCASE

def home(request):
	return render(request, 'app/index.html')

def get_key(dic, val):
    '''получение ключа по значению словаря'''
    for i in dic.items():
        if val in i:
            return i[0]

#def get_nstr_enc(dic, i, rotate):
#	''' получение нового символа для шифрования '''
#	char = dic[i] + rotate
#	# получили сдвиг по символу
#	# букв в анг алфавите 26, счет с 0
#	if char > 25:
#		char = char - 26
#	new_str += get_key(dic, char)
#	return new_str 

#def get_nstr_dec(dic, i, rotate):
#	''' получение нового символа для расшифрования'''
#	char = dic[i] - rotate
#	# получили сдвиг по символу
#	# букв в анг алфавите 26, счет с 0
#	if char > 0:
#		char = 26 + char
#	new_str += get_key(dic, char)
#	return new_str

def ajax_encode(request):

	new_string = ''
	data = {}
	global dict_lowc
	global dict_uppc
	left_side = str(request.GET['l_area'])
	rotate = int(request.GET['rv'])
	for i in left_side:
		#i_low = i.lower()
		if (i not in dict_lowc) and (i not in dict_uppc): # если такого символа нет в словаре, те. это не буква, то оставляем как есть 
			new_string += i
			continue
		#else
		if (i in dict_lowc):
		#	new_string = get_nstr_enc(dict_lowc, i, rotate)
			char = dict_lowc[i] + rotate
			# получили сдвиг по символу
			# букв в анг алфавите 26, счет с 0
			if char > 25:
				char = char - 26
			new_string += get_key(dict_lowc, char)
		elif (i in dict_uppc):
		#	new_string = get_nstr_enc(dict_uppc, i, rotate)
			char = dict_uppc[i] + rotate
			# получили сдвиг по символу
			# букв в анг алфавите 26, счет с 0
			if char > 25:
				char = char - 26
			new_string += get_key(dict_uppc, char)

	data['result'] = new_string   # добавляем в словарь для передачи 
	return HttpResponse(json.dumps(data), content_type="application/json")

def ajax_decode(request):

	new_string = ''
	#if request.method == 'GET':
	#results = { 'success' : False }
	data = {}
	#dictionary = {chr(x): x-97 for x in range(97, 123)}
	# получаем данные
	right_side = str(request.GET['r_area'])
	rotate = int(request.GET['rv'])

	for i in right_side:
		if (i not in dict_lowc) and (i not in dict_uppc): # если такого символа нет в словаре, те. это не буква, то оставляем как есть 
			new_string += i
			continue
		if (i in dict_lowc):
		#	new_string = get_nstr_dec(dict_lowc, i, rotate)
			char = dict_lowc[i] - rotate
			# получили сдвиг по символу
			# букв в анг алфавите 26, счет с 0
			if char < 0:
				char = 26 + char
			new_string += get_key(dict_lowc, char)
		elif (i in dict_uppc):
		#	new_string = get_nstr_dec(dict_uppc, i, rotate)
			char = dict_uppc[i] - rotate
			# получили сдвиг по символу
			# букв в анг алфавите 26, счет с 0
			if char < 0:
				char = 26 + char
			new_string += get_key(dict_uppc, char)

	data['result'] = new_string
	return HttpResponse(json.dumps(data), content_type="application/json")