from rest_framework import routers
from .views import ContactUsViewSet

router = routers.SimpleRouter(trailing_slash=False)

router.register(r'contact-us', ContactUsViewSet)

urlpatterns = router.urls