from django.contrib import admin
from .models import *

# Custom display of the model in admin site
class StudentsAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'bio', 'phone', 'registrationDate')
    

# Register your models here.
admin.site.register(Student, StudentsAdmin) #(Model, Model_class)