class SessionsController < ApplicationController
    skip_before_action
    skip_before_action

    def doclogin
        user = Doctor.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok
        else
            render json: { error: ["Invalid email or password"] }, status: :unauthorized
        end
    end

    def patientlogin
        user = Patient.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok
        else
            render json: { error: ["Invalid email or password"] }, status: :unauthorized
        end
    end

    def logout
        session.delete :current_user
    end

end
