from rest_framework import routers
from .views import CardViewSet

router = routers.SimpleRouter(trailing_slash=False)

router.register(r'card', CardViewSet)

urlpatterns = router.urls