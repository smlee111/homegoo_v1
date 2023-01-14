from django.db import models
from django.utils.translation import gettext as _

class CustomLand(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    title = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    date = models.DateField((""), auto_now=False, auto_now_add=False, null=True)
    house_type = models.CharField(max_length=200)
    heating = models.CharField(max_length=200)
    size = models.CharField(max_length=200)
    floor = models.CharField(max_length=200)
    cost = models.CharField(max_length=200)
    price = models.CharField(max_length=200, blank=True)
    price_month = models.CharField(max_length=200, blank=True)
    price_year = models.CharField(max_length=200, blank=True)
    maintenance_fee = models.CharField(max_length=200)
    loan_repayment = models.CharField(max_length=200)
    utility_bill = models.CharField(max_length=200)
    structure = models.CharField(max_length=200)
    # image = models.ImageField(default=("../media/pre.jpg"), upload_to=None, height_field=None, width_field=None, max_length=None)
    desc = models.TextField()
    registrant = models.EmailField(_('email address'))

    def __str__(self):
        return self.title