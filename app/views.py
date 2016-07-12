from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
#from django.utils import simplejson

def home(request):
	return render(request, 'app/index.html')

def ajax_encode(request):
	import json
	#results = { 'success' : False }
	data = {}
	data['var1'] = 'variable1'
	data['var2'] = 'variable2'
	return HttpResponse(json.dumps(data), content_type="application/json")
	
	# Тут пишем действия алгоритма
	#if True:
	#	results = { 'success' : True, 'var1' : 'Параметр1', 'var2' : 'Параметр2' }

	#json = simplejson.dumps(results)

	#return render(request, 'app/index.html')
	#return render(request, 'app/index.html', {'json' : json} )
	
	#return HttpResponse(json, mimetype='application/json')