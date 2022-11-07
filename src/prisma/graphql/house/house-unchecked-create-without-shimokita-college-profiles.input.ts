import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoUncheckedCreateNestedManyWithoutHousesInput } from '../photo/photo-unchecked-create-nested-many-without-houses.input';

@InputType()
export class HouseUncheckedCreateWithoutShimokitaCollegeProfilesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => PhotoUncheckedCreateNestedManyWithoutHousesInput, {nullable:true})
    photos?: PhotoUncheckedCreateNestedManyWithoutHousesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
