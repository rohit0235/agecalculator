d, m, y = map(int, input("Enter a date (format: DD,MM,YYYY): ").split(','))

def ageCalculator(y, m, d):
    import datetime
    today = datetime.datetime.now().date()
    dob = datetime.date(y, m, d)
    age = int((today-dob).days / 365.25)
    print(age)
ageCalculator(y,m,d)