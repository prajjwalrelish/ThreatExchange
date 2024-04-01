from operator import mod
from pyexpat import model
from mixins import UUIDMixin
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.postgres.fields import JSONField

# Create your models here.
class Card(UUIDMixin):

    primary_name = models.CharField(null=True, blank=False, max_length=200)
    aliases = ArrayField(
        models.CharField(max_length=100),
        default=None,
        null=True
    )
    country_of_origin = models.CharField(null=True, default=None, max_length=100, blank=True)
    sponsors = ArrayField(
        models.CharField(max_length=200),
        default=None,
        null=True,
        blank=True
    )
    motivation = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    target_sectors = ArrayField(
        models.CharField(max_length=200),
        default=None,
        null=True,
        blank=True
    )
    target_countries = ArrayField(
        models.CharField(max_length=200),
        default=None,
        null=True,
        blank=True
    )
    techniques_used = ArrayField(
        models.CharField(max_length=200),
        default=None,
        null=True,
        blank=True
    )
    tools_used = ArrayField(
        models.CharField(max_length=200),
        default=None,
        null=True,
        blank=True
    )
    further_information = ArrayField(
        models.TextField(null=True, blank=True),
        default=None,
        null=True,
        blank=True
    )
    operations_performed = JSONField(blank=True)
    refernces = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    last_modified = models.DateTimeField(auto_now_add=True)

