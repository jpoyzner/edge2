import { MapType } from '../utils/immutable';

type Contact = MapType<{
  name: string;
  number: number;
  context: string;
  error: boolean;
}, string, any>

export default Contact;