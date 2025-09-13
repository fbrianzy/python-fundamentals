import unittest
from math import sqrt

class TestMath(unittest.TestCase):
    def test_sqrt(self):
        self.assertEqual(sqrt(16), 4.0)

if __name__ == "__main__":
    unittest.main()
