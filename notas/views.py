from django.shortcuts import render


def musical_notes(request):
    return render(request, 'notas/index.html')
# Create your views here.

