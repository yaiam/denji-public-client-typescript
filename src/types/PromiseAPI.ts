import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ApiApiPublicConsentAcceptRequest } from '../models/ApiApiPublicConsentAcceptRequest';
import { ApiApiPublicConsentRejectRequest } from '../models/ApiApiPublicConsentRejectRequest';
import { ObservableConsentApi } from './ObservableAPI';

import { ConsentApiRequestFactory, ConsentApiResponseProcessor} from "../apis/ConsentApi";
export class PromiseConsentApi {
    private api: ObservableConsentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConsentApiRequestFactory,
        responseProcessor?: ConsentApiResponseProcessor
    ) {
        this.api = new ObservableConsentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param apiApiPublicConsentAcceptRequest 
     */
    public apiPublicConsentAcceptPostWithHttpInfo(apiApiPublicConsentAcceptRequest?: ApiApiPublicConsentAcceptRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiPublicConsentAcceptPostWithHttpInfo(apiApiPublicConsentAcceptRequest, _options);
        return result.toPromise();
    }

    /**
     * @param apiApiPublicConsentAcceptRequest 
     */
    public apiPublicConsentAcceptPost(apiApiPublicConsentAcceptRequest?: ApiApiPublicConsentAcceptRequest, _options?: Configuration): Promise<void> {
        const result = this.api.apiPublicConsentAcceptPost(apiApiPublicConsentAcceptRequest, _options);
        return result.toPromise();
    }

    /**
     * @param consentRequestId 
     */
    public apiPublicConsentGetWithHttpInfo(consentRequestId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiPublicConsentGetWithHttpInfo(consentRequestId, _options);
        return result.toPromise();
    }

    /**
     * @param consentRequestId 
     */
    public apiPublicConsentGet(consentRequestId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.apiPublicConsentGet(consentRequestId, _options);
        return result.toPromise();
    }

    /**
     * @param apiApiPublicConsentRejectRequest 
     */
    public apiPublicConsentRejectPostWithHttpInfo(apiApiPublicConsentRejectRequest?: ApiApiPublicConsentRejectRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiPublicConsentRejectPostWithHttpInfo(apiApiPublicConsentRejectRequest, _options);
        return result.toPromise();
    }

    /**
     * @param apiApiPublicConsentRejectRequest 
     */
    public apiPublicConsentRejectPost(apiApiPublicConsentRejectRequest?: ApiApiPublicConsentRejectRequest, _options?: Configuration): Promise<void> {
        const result = this.api.apiPublicConsentRejectPost(apiApiPublicConsentRejectRequest, _options);
        return result.toPromise();
    }


}



