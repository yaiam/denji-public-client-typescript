/* tslint:disable */
/* eslint-disable */
/**
 * Public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiApiPublicConsentGetOneResponseClientDto
 */
export interface ApiApiPublicConsentGetOneResponseClientDto {
    /**
     * 
     * @type {string}
     * @memberof ApiApiPublicConsentGetOneResponseClientDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiApiPublicConsentGetOneResponseClientDto
     */
    description?: string | null;
}

/**
 * Check if a given object implements the ApiApiPublicConsentGetOneResponseClientDto interface.
 */
export function instanceOfApiApiPublicConsentGetOneResponseClientDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiApiPublicConsentGetOneResponseClientDtoFromJSON(json: any): ApiApiPublicConsentGetOneResponseClientDto {
    return ApiApiPublicConsentGetOneResponseClientDtoFromJSONTyped(json, false);
}

export function ApiApiPublicConsentGetOneResponseClientDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiApiPublicConsentGetOneResponseClientDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ApiApiPublicConsentGetOneResponseClientDtoToJSON(value?: ApiApiPublicConsentGetOneResponseClientDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
    };
}
