from django.shortcuts import render
from django.contrib.sites.shortcuts import get_current_site
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.throttling import AnonRateThrottle
from .models import CustomLand
from .serializers import LandSerializer

class ListLandView(generics.ListCreateAPIView):
    queryset = CustomLand.objects.all()
    serializer_class = LandSerializer

class RegistLandView(APIView):
    permission_classes = [permissions.AllowAny]
    throttle_classes = [AnonRateThrottle]
    authentication_classes = []

    def post(self, request):
        data = request.data
        title = data.get('title')
        location = data.get('location')
        address = data.get('address')
        date = data.get('date')
        house_type = data.get('house_type')
        heating = data.get('heating')
        size = data.get('size')
        floor = data.get('floor')
        cost = data.get('cost')
        price = data.get('price')
        price_month = data.get('price_month')
        price_year = data.get('price_year')
        maintenance_fee = data.get('maintenance_fee')
        loan_repayment = data.get('loan_repayment')
        utility_bill = data.get('utility_bill')
        structure = data.get('structure')
        # image = data.get('image')
        desc = data.get('desc')
        registrant = data.get('registrant')
        messages = {'errors': []}
        if title == None:
            messages['errors'].append('title can\'t be empty')
        if location == None:
            messages['errors'].append('location can\'t be empty')
        if address == None:
            messages['errors'].append('address can\'t be empty')
        if house_type == None:
            messages['errors'].append('house_type can\'t be empty')
        if heating == None:
            messages['errors'].append('heating can\'t be empty')
        if size == None:
            messages['errors'].append('size can\'t be empty')
        if floor == None:
            messages['errors'].append('floor can\'t be empty')
        if cost == None:
            messages['errors'].append('cost can\'t be empty')
        if maintenance_fee == None:
            messages['errors'].append('maintenance_fee can\'t be empty')
        if loan_repayment == None:
            messages['errors'].append('loan_repayment can\'t be empty')
        if utility_bill == None:
            messages['errors'].append('utility_bill can\'t be empty')
        if structure == None:
            messages['errors'].append('structure can\'t be empty')
        if desc == None:
            messages['errors'].append('desc can\'t be empty')
        if CustomLand.objects.filter(address=address).exists():
            messages['errors'].append(
                "Address already exists with this address.")
        try:
            land = CustomLand.objects.create(
                title=title,
                location=location,
                address=address,
                date=date,
                house_type=house_type,
                heating=heating,
                size=size,
                floor=floor,
                cost=cost,
                price=price,
                price_month=price_month,
                price_year=price_year,
                maintenance_fee=maintenance_fee,
                loan_repayment=loan_repayment,
                utility_bill=utility_bill,
                structure=structure,
                # image=image,
                desc=desc,
                registrant=registrant,
            )
            serializer = LandSerializer(land, many=False)
        except Exception as e:
            print(e)
            return Response({'detail': f'{e}'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.data)

class DetailLandView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomLand.objects.all()
    serializer_class = LandSerializer