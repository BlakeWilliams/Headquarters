class Api::V1::IssuesController < ApiController 
  def index
    @issues = current_user.issues.find(params[:ids])
    render json: @issues
  end

  def create
    @issue = Issue.new(issue_params)

    if @issue.save
      render json: @issue
    else
      render json: { errors: @issue.errors.messages }, status: 422
    end
  end

  private

  def issue_params
    params.require(:issue).permit(:name, :description, :project_id)
  end
end
