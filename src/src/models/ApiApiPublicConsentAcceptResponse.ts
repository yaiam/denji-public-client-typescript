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
 * @interface ApiApiPublicConsentAcceptResponse
 */
export interface ApiApiPublicConsentAcceptResponse {
    /**
     * 
     * @type {string}
     * @memberof ApiApiPublicConsentAcceptResponse
     */
    consentResponseId?: string | null;
}

/**
 * Check if a given object implements the ApiApiPublicConsentAcceptResponse interface.
 */
export function instanceOfApiApiPublicConsentAcceptResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiApiPublicConsentAcceptResponseFromJSON(json: any): ApiApiPublicConsentAcceptResponse {
    return ApiApiPublicConsentAcceptResponseFromJSONTyped(json, false);
}

export function ApiApiPublicConsentAcceptResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiApiPublicConsentAcceptResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consentResponseId': !exists(json, 'consentResponseId') ? undefined : json['consentResponseId'],
    };
}

export function ApiApiPublicConsentAcceptResponseToJSON(value?: ApiApiPublicConsentAcceptResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'consentResponseId': value.consentResponseId,
    };
}

