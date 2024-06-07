import { environment } from "../../environment";
import { DEVELOPMENT } from "../misc";

export const URL_API = environment === DEVELOPMENT ? "http://localhost:8080" : "";
