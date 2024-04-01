from operator import mod
from pyexpat import model
from mixins import UUIDMixin
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.postgres.fields import JSONField

# Create your models here.
class ContactUs(UUIDMixin):
    name = models.CharField(null=True, blank=False, max_length=200)
    email = models.EmailField(null=True, blank=False, max_length=200)
    phone = models.CharField(null=True, blank=True, max_length=20)
    message = models.TextField(null=True, blank=True)
    is_resolved = models.BooleanField(null=True, default=False, blank=True)
