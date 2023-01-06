
// Tipų indeksai ir “keyof” operatorius
{
  interface Person {
    id: string | number;
    fullname: string;
    age: number;
  };


  type PersonId = Person['id'];


  type PersonFullname = Person['fullname'];


  type PersonAge = Person['age'];


  type PersonKey = keyof Person;

  const personKey1: PersonKey = "age";
  const personKey2: PersonKey = "id";
  const personKey3: PersonKey = "fullname";

  // const personKey4: PersonKey = "neteisingas";


  interface Car {
    model: string;
    makeYear: number;
    priceInDollars: number
    damaged: boolean,
    naujaSavybe: boolean,
  };

  type CarViewModel = {
    [CarKey in keyof Car]: Car[CarKey] extends number ? string : Car[CarKey];
  }

  type ReplaceObjectPropTypes<ObjectType, ToReplace, ReplaceWith> = {
    [Key in keyof ObjectType]: ObjectType[Key] extends ToReplace ? ReplaceWith : ObjectType[Key];
  }

  type CarViewModel2 = ReplaceObjectPropTypes<Car, number, string>;
}

// Tipų apjungimas ir “&” sankirtos operatorius
{
  {
    type Person = {
      name: string,
      surname: string,
    }

    type Student = Person & {
      course: number,
      marks: number[],
    }

    // const stud: Student;
    // stud.
  }

  {
    interface Person {
      name: string;
      surname: string;
    }

    interface Student extends Person {
      course: number,
      marks: number[],
    }

    // const stud: Student;
    // stud.
  }

  type Fish = {
    swim: () => void,
    x: number[],
    y: number,
    z: number
  }

  type Snake = {
    crowl: () => void,
    x: string,
    y: number,
  }


  // type Being = Fish & Omit<Snake, 'x' | 'crowl'> & { klp: string };

  // const a: Being;


  const sukurtiDuomenųBazėsIntegracija = () => {
    // labai sudetinga funkcija, kuri sugeneruoja labai daug pagalbinių funkijų pagal parametrus
    return {
      getData: () => 7,
      getLastId: 5845,
      connect: () => (listener: string) => 'asdasdasd',
    }
  }


  type DBIntegration = ReturnType<typeof sukurtiDuomenųBazėsIntegracija>;

}

// Tipų susaistymas
{

  {
    type Accommodation = {
      readonly address: string,
      city?: string | number,
      type: 'Flat' | 'House' | 'Cottage',
      niekadaTokiosNebus: never
    }

    // https://stackoverflow.com/questions/50837171/remove-properties-of-a-type-from-another-type
    type FilterOutNever<T> = Pick<T, {
      [Key in keyof T]: T[Key] extends never ? never : Key
    }[keyof T]>


    type Incapsulate<ObjectType> = FilterOutNever<{
      [Key in keyof ObjectType as Key extends string ? `get${Capitalize<Key>}` : Key]: Key extends string ? () => ObjectType[Key] : never
    } & {
        [Key in keyof ObjectType as Key extends string ? `set${Capitalize<Key>}` : Key]: Key extends string ? (value: ObjectType[Key]) => void : never
      }>

    type A = Incapsulate<{
      1: number,
      2: string,
      address: string,
    }>;

    type AccommodationGetters = {
      [Key in keyof Accommodation as `get${Capitalize<Key>} `]: () => Accommodation[Key]
    }

    type AccommodationSetters = {
      [Key in keyof Accommodation as `set${Capitalize<Key>} `]: (val: Accommodation[Key]) => void
    }

    type AccommodationIncapsulated =
      AccommodationGetters & AccommodationSetters;

    // let accomodation: AccommodationIncapsulated;
    // accomodation.







  }

  {

    type MultipleColor = {
      main: string,
      light: string,
      dark: string
    };

    type Palette = {
      primary: string,
      secondary: string,
      success: MultipleColor,
      danger: MultipleColor,
    };







    type PalleteMultipleColorKeyObject = {
      [Key in keyof Palette]: Palette[Key] extends MultipleColor ? Key : never
    };


    type PalleteMultipleColorKeys = PalleteMultipleColorKeyObject[keyof Palette];





    type PaletteMultipleColors = Pick<Palette, PalleteMultipleColorKeys>;




    let a: PaletteMultipleColors;





  }
}

// Pagalbiniai tipai
{
  {
    type User = {
      email: string,
      password: string,
      name?: string,
      surname?: string,
      image?: string,
      cartItems: string[],
    };

    type UserRegistration = Omit<User, 'cartItems'> & {
      repeatEmail: User['email'],
      repeatPassword: User['password'],
    };

    let a: UserRegistration;
    // a.







  }

  {
    type User = {
      email: string,
      password: string,
      name?: string,
      surname?: string,
      image?: string,
      cartItems: string[],
    };







    type UserUpdate = Omit<User, 'email' | 'password'>;

    let a: UserUpdate;
  }

  {
    type User = {
      email: string,
      password: string,
      name?: string,
      surname?: string,
      image?: string,
      cartItems: string[],
    };






    type UserOptionalProps = Pick<User, 'name' | 'surname' | 'image'>;







    type UserPropsRequired = Required<UserOptionalProps>;






    type EssentialUsers = Record<
      'admin' | 'moderator' | 'manager',
      User
    >;


    let a: UserPropsRequired;
    let b: EssentialUsers;
  }

  {
    interface Car {
      id: number;
      model: string;
      makeYear: number;
    };

    type CarsGroupedByModel = {
      [Key: Car['model']]: Omit<Car, 'model'>[]
    }

    const cars: Car[] = [
      { id: 1, model: 'Citroen C4', makeYear: 2000 },
      { id: 2, model: 'Citroen C5', makeYear: 2002 },
      { id: 3, model: 'Citroen C6', makeYear: 2004 },
      { id: 4, model: 'Citroen C4', makeYear: 2006 },
      { id: 5, model: 'Citroen C5', makeYear: 2010 },
    ];

    const carsGroupedByModel = cars.reduce<CarsGroupedByModel>((prevGroups, { model, ...car }) => {
      if (model in prevGroups) {
        prevGroups[model].push(car);
      } else {
        prevGroups[model] = [car];
      }
      return prevGroups;
    }, {});

    console.table(carsGroupedByModel);
  }
}
