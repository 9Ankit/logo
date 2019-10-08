import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class api {
  @JsonProperty('policiess', [String], true)
  public policiess: string[] = [];

}