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
 * @interface ApiApiPublicConsentAcceptRequest
 */
export interface ApiApiPublicConsentAcceptRequest {
    /**
     * 
     * @type {string}
     * @memberof ApiApiPublicConsentAcceptRequest
     */
    consentRequestId?: string | null;
}

/**
 * Check if a given object implements the ApiApiPublicConsentAcceptRequest interface.
 */
export function instanceOfApiApiPublicConsentAcceptRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiApiPublicConsentAcceptRequestFromJSON(json: any): ApiApiPublicConsentAcceptRequest {
    return ApiApiPublicConsentAcceptRequestFromJSONTyped(json, false);
}

export function ApiApiPublicConsentAcceptRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiApiPublicConsentAcceptRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consentRequestId': !exists(json, 'consentRequestId') ? undefined : json['consentRequestId'],
    };
}

export function ApiApiPublicConsentAcceptRequestToJSON(value?: ApiApiPublicConsentAcceptRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'consentRequestId': value.consentRequestId,
    };
}
