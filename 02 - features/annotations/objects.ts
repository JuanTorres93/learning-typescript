const profile = {
  fullName: 'alex',
  lastName: 'doe',
  age: 30,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// DOC: destructe atribute
const { age }: { age: number } = profile;
const { fullName, lastName }: { fullName: string; lastName: string } = profile;

// DOC: destructe nested atribute
const {
  coords: { lat, lng },
}: {
  coords: {
    lat: number;
    lng: number;
  };
} = profile;
