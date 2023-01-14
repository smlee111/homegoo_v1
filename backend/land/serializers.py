from dataclasses import field
from rest_framework import serializers
from .models import CustomLand

class LandSerializer(serializers.ModelSerializer):
        class Meta:
            fields = (
                'id',
                'title',
                'location',
                'address',
                'date',
                'house_type',
                'heating',
                'size',
                'floor',
                'cost',
                'price',
                'price_month',
                'price_year',
                'maintenance_fee',
                'loan_repayment',
                'utility_bill',
                'structure',
                # 'image',
                'desc',
                'registrant'
            )
            model = CustomLand