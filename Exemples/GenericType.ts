// Une interface generique pour une reponse HTTP typee

interface ApiResponse<T> {
  data: T | null;
  status: number;
  error?: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return {
        status: response.status,
        data: null,
        error: `Error: ${response.statusText}`,
      };
    }

    const jsonData: T = await response.json();
    return {
      status: response.status,
      data: jsonData,
    };
  } catch (err: any) {
    return {
      status: 500,
      data: null,
      error: err.message,
    };
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

fetchData<User[]>("https://example.com/api/users").then((apiResponse) => {
  if (apiResponse.data) {
    apiResponse.data.forEach((user) => {
      console.log(`User: ${user.id}, Name: ${user.name}`);
    });
  } else {
    console.error(`Erreur: ${apiResponse.error}`);
  }
});

// un fonction generique
function identity<T>(value: T): T {
  return value;
}

// Typescript peut inferer T automatiquement
const result = identity("Hello");

// On restreint T aux types qui ressemblent à { id: number }
function logId<T extends { id: number }>(obj: T): void {
  console.log(obj.id);
}

// Ceci fonctionne, car obj a un id de type number
logId({ id: 123, name: "Test" });

// Ceci ne fonctionne pas, car l'objet ne possède pas de propriété id
// logId({ name: "No ID" }); // Erreur de compilation
