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
 * @interface ApiApiPublicConsentRejectResponse
 */
export interface ApiApiPublicConsentRejectResponse {
    /**
     * 
     * @type {string}
     * @memberof ApiApiPublicConsentRejectResponse
     */
    consentResponseId?: string | null;
}

/**
 * Check if a given object implements the ApiApiPublicConsentRejectResponse interface.
 */
export function instanceOfApiApiPublicConsentRejectResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiApiPublicConsentRejectResponseFromJSON(json: any): ApiApiPublicConsentRejectResponse {
    return ApiApiPublicConsentRejectResponseFromJSONTyped(json, false);
}

export function ApiApiPublicConsentRejectResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiApiPublicConsentRejectResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consentResponseId': !exists(json, 'consentResponseId') ? undefined : json['consentResponseId'],
    };
}

export function ApiApiPublicConsentRejectResponseToJSON(value?: ApiApiPublicConsentRejectResponse | null): any {
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
