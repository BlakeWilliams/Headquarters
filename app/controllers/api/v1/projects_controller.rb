class Api::V1::ProjectsController < ApiController
  def index
    @projects = current_user.projects
    render json: @projects
  end

  def show
    @project = current_user.projects.find(params[:id])
    render json: @project
  end

  def create
    @project = Project.new(project_params)
    @project.user = current_user

    if @project.save
      render json: @project
    else
      render json: { errors: @project.errors.messages }, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update_attributes(project_params)
      render json: @project
    else
      render json: { errors: @project.errors.messages }, status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :user_id)
  end
end
