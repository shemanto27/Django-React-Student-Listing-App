from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField("Name", max_length=30)
    email = models.EmailField()
    bio = models.CharField("Bio", max_length=200)
    phone = models.IntegerField('Phone Number')
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    
    def __str__(self):
        return self.name