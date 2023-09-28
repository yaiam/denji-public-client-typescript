import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ApiApiPublicConsentAcceptRequest } from '../models/ApiApiPublicConsentAcceptRequest';
import { ApiApiPublicConsentRejectRequest } from '../models/ApiApiPublicConsentRejectRequest';

import { ObservableConsentApi } from "./ObservableAPI";
import { ConsentApiRequestFactory, ConsentApiResponseProcessor} from "../apis/ConsentApi";

export interface ConsentApiApiPublicConsentAcceptPostRequest {
    /**
     * 
     * @type ApiApiPublicConsentAcceptRequest
     * @memberof ConsentApiapiPublicConsentAcceptPost
     */
    apiApiPublicConsentAcceptRequest?: ApiApiPublicConsentAcceptRequest
}

export interface ConsentApiApiPublicConsentGetRequest {
    /**
     * 
     * @type string
     * @memberof ConsentApiapiPublicConsentGet
     */
    consentRequestId?: string
}

export interface ConsentApiApiPublicConsentRejectPostRequest {
    /**
     * 
     * @type ApiApiPublicConsentRejectRequest
     * @memberof ConsentApiapiPublicConsentRejectPost
     */
    apiApiPublicConsentRejectRequest?: ApiApiPublicConsentRejectRequest
}

export class ObjectConsentApi {
    private api: ObservableConsentApi

    public constructor(configuration: Configuration, requestFactory?: ConsentApiRequestFactory, responseProcessor?: ConsentApiResponseProcessor) {
        this.api = new ObservableConsentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiPublicConsentAcceptPostWithHttpInfo(param: ConsentApiApiPublicConsentAcceptPostRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiPublicConsentAcceptPostWithHttpInfo(param.apiApiPublicConsentAcceptRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPublicConsentAcceptPost(param: ConsentApiApiPublicConsentAcceptPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiPublicConsentAcceptPost(param.apiApiPublicConsentAcceptRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPublicConsentGetWithHttpInfo(param: ConsentApiApiPublicConsentGetRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiPublicConsentGetWithHttpInfo(param.consentRequestId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPublicConsentGet(param: ConsentApiApiPublicConsentGetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiPublicConsentGet(param.consentRequestId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPublicConsentRejectPostWithHttpInfo(param: ConsentApiApiPublicConsentRejectPostRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiPublicConsentRejectPostWithHttpInfo(param.apiApiPublicConsentRejectRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPublicConsentRejectPost(param: ConsentApiApiPublicConsentRejectPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiPublicConsentRejectPost(param.apiApiPublicConsentRejectRequest,  options).toPromise();
    }

}
