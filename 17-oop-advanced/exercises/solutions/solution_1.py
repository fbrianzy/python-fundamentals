class Animal:
    def speak(self): return "generic"
class Dog(Animal):
    def speak(self):
        s = super().speak()
        return s + " woof"
print(Dog().speak())
