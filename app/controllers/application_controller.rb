class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
end
