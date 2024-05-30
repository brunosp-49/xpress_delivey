export type Address = {
  address_id: string;
  address_name: string;
  address_planet: 'Earth' | 'Mars';
  address_lot_id: string;
  address_type: 1 | 2 | 3 | 4;
  address_citizen_id: string;
  address_citizen_full_name: string;
  address_observations: string;
  address: string;
  address_city: string;
  address_state: string;
  address_country: string;
  address_zip_code: string;
};

export interface initialStateAddressInterface {
  addresses: Address[] | any[];
  selectedAddress: Address | null;
}
