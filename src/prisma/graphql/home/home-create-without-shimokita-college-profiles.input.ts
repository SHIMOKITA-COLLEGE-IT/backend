import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateNestedManyWithoutHomesInput } from '../photo/photo-create-nested-many-without-homes.input';

@InputType()
export class HomeCreateWithoutShimokitaCollegeProfilesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => PhotoCreateNestedManyWithoutHomesInput, {nullable:true})
    photos?: PhotoCreateNestedManyWithoutHomesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
