from django.contrib.auth.models import User
from django.test import TestCase
from faker import Faker
from rest_framework.test import APIClient


class NewUserTestCase(TestCase):

    def setUp(self) -> None:
        self.create_credentials()
        self.user = User.objects.create_superuser(
            username=self.username,
            password=self.password,
            first_name=self.first_name,
            last_name=self.last_name

        )
        self.authenticate()

    def create_credentials(self):
        faker = Faker()
        self.username = faker.user_name()
        self.password = faker.password()
        self.email = faker.email()
        self.first_name = faker.first_name()
        self.last_name = faker.last_name()

    def authenticate(self):
        self.client = APIClient()
        self.login_response = self.client.post("/api/user/login",
                              {
                                 'username': self.username,
                                 'password': self.password
                             })
        self.access_token = self.login_response.json()['access']
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.access_token)

    def tearDown(self) -> None:
        self.user.delete()