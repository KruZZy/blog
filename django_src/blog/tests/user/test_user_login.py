from blog.tests import test_base


class UserLoginTestCase(test_base.NewUserTestCase):

    def setUp(self) -> None:
        super().setUp()

    def test_login(self):
        self.assertEquals(200, self.login_response.status_code)
        self.assertTrue('access' in self.login_response.json()
                        and 'refresh' in self.login_response.json())

        token_response = self.client.post("/api/user/token-verify",
                                     {
                                         'token': self.access_token
                                     })

        self.assertEquals(200, token_response.status_code)

    def tearDown(self) -> None:
        self.client.logout()
        super().tearDown()
